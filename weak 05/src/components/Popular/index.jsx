import Loading from "../Loading";

export default function Popular({reposData, isLoading}) {
  if (isLoading) {
    return <Loading />
  }

  return (
  <div>
    <h1 className="center-text">
      This is Popular!
    </h1>
    <ol>
      {reposData.map((repos, index) => {
        return <div key={index} className="RepoList">
          <h2 className="ReposRanking">{index + 1}위</h2> 
          <p className="ReposName">저장소: {repos?.name}</p>
          <p>소유자: {repos?.owner.login}</p>
          <a href={repos?.html_url} target="blank">저장소로 이동</a>
          <p>팔로워: {repos?.stargazers_count}명</p>
          <p>포크: {repos?.forks_count}회</p>
          <hr />
        </div>;
      })}
    </ol>
  </div>
  );
}
