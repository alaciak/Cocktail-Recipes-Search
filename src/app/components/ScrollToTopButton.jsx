import React from 'react';

const ScrollToTopButton = () => {

  const handleOnClickScrollUp = (event, scrollDuration) => {
    event.preventDefault();
    let scrollValue = -window.scrollY / (scrollDuration / 20),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollValue );
        }
        else clearInterval(scrollInterval);
    },15);
  }

  return <div className='scroll-to-top' onClick={ event => handleOnClickScrollUp(event, 1000) } >^</div>
}

module.exports = ScrollToTopButton;
