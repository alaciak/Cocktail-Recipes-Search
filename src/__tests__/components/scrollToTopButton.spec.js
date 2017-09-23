import ScrollToTopButton from '../../app/components/ScrollToTopButton.jsx';

describe('ScrollToTopButton', () => {

  it('renders correctly ', () => {
    expect(ScrollToTopButton()).toMatchSnapshot();
  });

});
