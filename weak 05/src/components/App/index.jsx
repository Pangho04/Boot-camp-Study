import { useState } from 'react';
import Popular from '../Popular';
import Battle from '../Battle';
import NavButton from '../NavButton';
import './styles.css';
import SelectBox from '../SelectBox';
import InputBox from '../InputBox';
import { getPopularRepos, battle } from '../../utils/api';
import Loading from '../Loading';

export default function App() {
  const [showBattle, setShowBattle] = useState(false);
  const [popularReposData, setPopularReposData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState([]);

  async function requestRepoData(selectedLanguage) {
    setIsLoading(true);

    const response = await getPopularRepos(selectedLanguage);

    setPopularReposData(response);
    setIsLoading(false);
  }

  async function requestPlayerData(usersIdData) {
    setIsLoading(true);

    const response = await battle(usersIdData);

    setPlayerData(response);
    setIsLoading(false);
  }

  function toggleView(showBattle) {
    setShowBattle(showBattle);
  }

  function loadingView(isLoading) {
    if (isLoading) {
      return <Loading text="Loading" speed={300} />
    }
  }

  return (
    <div className="container">
      <div className="flex space-between">
        <NavButton
          isActive={!showBattle}
          text="인기 저장소"
          onClick={() => toggleView(false)}
        />
        {!showBattle && <SelectBox onSubmit={requestRepoData} isDisabled={isLoading} />}
        {showBattle && <InputBox onSubmit={requestPlayerData} isDisabled={isLoading} />}
        <NavButton
          isActive={showBattle}
          text="Github 대결"
          onClick={() => toggleView(true)}
        />
      </div>
      {isLoading && <Loading text="Loading" speed={300} />}
      {!isLoading && !showBattle && <Popular reposData={popularReposData} />}
      {!isLoading && showBattle && <Battle playersData={playerData} />}
    </div>
  );
}
