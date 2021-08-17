import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const CoinGeckoCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="CoinGecko"
    logo={require('../../../assets/img/logo_coingecko.png')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p className="mb-4 text text-gray-600 dark:text-gray-300">
      Go to TIKI's CoinGecko page and click on the STAR to LIKE TIKI!
    </p>

    <div className="mb-4">
      <a
        className="block text-gray-800 dark:text-gray-200 underline"
        href="https://www.coingecko.com/en/coins/tiki-token"
        target="_blank"
        rel="noopener noreferrer"
      >
        TIKI on CoinGecko
      </a>
    </div>
  </DailyTaskCard>
)

export default CoinGeckoCard
