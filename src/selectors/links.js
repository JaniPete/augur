import { ACCOUNT, MARKETS, MAKE, TRANSACTIONS, M, MY_POSITIONS, MY_MARKETS, MY_REPORTS, LOGIN_MESSAGE } from 'modules/site/constants/views';
import { MARKET_DATA_NAV_OUTCOMES, MARKET_DATA_NAV_CHARTS, MARKET_DATA_NAV_INFO } from 'modules/market/constants/market-component-nav-items';
import { LOGIN } from 'modules/auth/constants/auth-types';

export default {
	authLink: { href: '/?page=register', onClick: url => require('../selectors').update({ activeView: LOGIN, url }) },
	marketsLink: { href: '/', onClick: url => require('../selectors').update({ activeView: MARKETS, url }) },
	transactionsLink: { href: '/?page=transactions', onClick: url => require('../selectors').update({ activeView: TRANSACTIONS, url }) },
	marketLink: { href: '/?page=m', onClick: url => require('../selectors').update({ activeView: M, url }) },
	previousLink: { href: '/', onClick: url => require('../selectors').update({ activeView: MARKETS, url }) },
	createMarketLink: { href: '/?page=create', onClick: url => require('../selectors').update({ activeView: MAKE, url }) },
	accountLink: { href: '/?page=account', onClick: url => require('../selectors').update({ activeView: ACCOUNT, url }) },
	myPositionsLink: { href: '/?page=my-positions', onClick: url => require('../selectors').update({ activeView: MY_POSITIONS, url }) },
	myMarketsLink: { href: '/?page=my-markets', onClick: url => require('../selectors').update({ activeView: MY_MARKETS, url }) },
	myReportsLink: { href: '/?page=my-reports', onClick: url => require('../selectors').update({ activeView: MY_REPORTS, url }) },
	loginMessageLink: { href: '/?page=login-message', onClick: url => require('../selectors').update({ activeView: LOGIN_MESSAGE, url }) },
	marketDataNavOutcomesLink: { href: `?m=0&marketDataNav=${MARKET_DATA_NAV_OUTCOMES}`, onClick: url => require('../selectors').update({ url }) },
	marketDataNavChartsLink: { href: `?m=0&marketDataNav=${MARKET_DATA_NAV_CHARTS}`, onClick: url => require('../selectors').update({ url }) },
	marketDataNavInfoLink: { href: `?m=0&marketDataNav=${MARKET_DATA_NAV_INFO}`, onClick: url => require('../selectors').update({ url }) },
};
