// 년,월,일 가져오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  // 어제 날짜 구하기
  const today = new Date();
  //   console.log(today);

  // 년, 월, 일 분리 => 분리한 값을 각각 요소안에 보여주기
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 월 : 0부터시작하기에 +1
  const day = today.getDate() - 1; // 어제날짜 구하기위해 -1

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};
init();

// 사용자가 확인을 누르면 사용자가 입력한 년, 월, 일 가져오기
document.querySelector("button").addEventListener("click", () => {
  const targetDt = txtYear.value + selMon.value + selDay.value;
  //   console.log(targetDt);

  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4cb94726cef5af841db6efd248a5af76&targetDt=${targetDt}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.boxOfficeResult);
      console.log(data.boxOfficeResult.dailyBoxOfficeList);

      const boxList = data.boxOfficeResult.dailyBoxOfficeList;
      let list = ``;
      //   console.log("순위(변동)    영화명");
      boxList.forEach((movie) => {
        // 순위   영화명
        //  1(▲1)  승부
        // rank  rankInten  movieNm
        const movieNm = movie.movieNm;
        const rank = movie.rank;
        let rankInten = movie.rankInten;

        list += `${rank}위&nbsp;&nbsp;`;

        if (rankInten > 0) {
          list += "(  ▲  ";
        } else if (rankInten < 0) {
          list += "(  ▼  ";
        } else {
          list += "(  =  ";
        }
        list += `${rankInten} ) `;
        list += `<a href ='#' id = 'link' onclick = 'javascript:movieInfo(${movie.movieCd})'>${movieNm}</a>`;
        list += `<br>`;
        // console.log(list);
        document.querySelector("#rank").innerHTML = list;
      });
    });
});

// 영화 상세 정보
const movieInfo = (movieCd) => {
  console.log(movieCd);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=4cb94726cef5af841db6efd248a5af76&movieCd=${movieCd}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const mvinfo = data.movieInfoResult.movieInfo;

      // 영화제목 movieNm
      const movieNm = mvinfo.movieNm;
      // 영어제목 movieNmEn
      const movieNmEn = mvinfo.movieNmEn;
      // 상영시간 showTm
      const showTm = mvinfo.showTm;

      let list = ``;
      list += `<ul>`;
      list += `<li>영화제목 : ${movieNm} </li>`;
      list += `<li>영어제목 : ${movieNmEn} </li>`;
      list += `<li>상영시간 : ${showTm}분 </li>`;

      // 감독정보 directors.peopleNm
      mvinfo.directors.forEach((director) => {
        const dirName = director.peopleNm;
        list += `<li>감독 : ${dirName} </li>`;
      });

      // 배우정보 actors.peopleNm
      mvinfo.actors.forEach((actor) => {
        const actName = actor.peopleNm;
        list += `<li>배우 : ${actName} </li>`;
      });

      list += `</ul>`;
      document.querySelector("#info").innerHTML = list;
    });
};

movieInfo();
