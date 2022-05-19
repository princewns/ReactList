import {useState} from 'react';

const ListFunction = () => {
  // useState를 통해서 state 작성
  const [season, setSeason] = useState([
    // key 값을 위해서 id 작성
    {id : 1, text : '봄'},
    {id : 2, text : '여름'},
    {id : 3, text : '가을'},
    {id : 4, text : '겨울'}
  ]);
  
  //id 값을 받아와서 받아온 id를 제외한 값을 저장하는 함수
  // 받아온 id값만 제외하였기에 id를 삭제하는 것과 동일
  const deleteSeason = (id) => {
    const nextSeason = season.filter((s) => (s.id !== id));
    this.setState({season : nextSeason});
    setSeason(nextSeason);
  }
  return(
    <div>
      <ul>
        {season.map((s) => (<li key={s.id} onClick={() => {
          //함수에 값을 전달하기 위해서는 익명함수로 감싸서 사용
          deleteSeason(s.id)}}>
          {s.text}</li>))}
      </ul>
    </div>
  );
};

export default ListFunction;
