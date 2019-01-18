import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('UA-48509443-8');
  console.log('GA INICIADO');
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  console.log('PAGE VIEW:', window.location.pathname);
}
