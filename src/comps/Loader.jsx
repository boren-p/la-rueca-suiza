import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <section className="container">
        <div>
          <div>
            <span className="one h6" />
            <span className="two h3" />
          </div>
        </div>
        <div>
          <div>
            <span className="one h1" />
            <span className="two h4" />
          </div>
        </div>
        <div>
          <div>
            <span className="one h5" />
            <span className="two h2" />
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container div {
    position: absolute;
    width: 90px;
    height: 51px;
  }

  .container div:nth-of-type(2) {
    transform: rotate(60deg)
  }

  .container div:nth-of-type(3) {
    transform: rotate(-60deg)
  }

  .container div div {
    width: 100%;
    height: 100%;
    position: relative
  }

  .container div div span {
    position: absolute;
    width: 4px;
    height: 0%;
    background: #053146;
    z-index: 999999;
  }

  .h1 {
    left: 0;
    animation: load1 1s linear infinite;
    animation-delay: .1s; 
  }

  .h2 {
    right: 0;
    animation: load2 0.5s linear infinite;
    animation-delay: .2s; 
  }

  .h3 {
    right: 0;
    animation: load3 0.5s linear infinite;
    animation-delay: .3s; 
  }

  .h4 {
    right: 0;
    animation: load4 0.5s linear infinite;
    animation-delay: .4s; 
  }

  .h5 {
    left: 0;
    animation: load5 0.5s linear infinite;
    animation-delay: .5s; 
  }

  .h6 {
    left: 0;
    animation: load6 0.5s linear infinite;
    animation-delay: .6s; 
  }

  @keyframes load1 {
    0% {
      bottom: 0;
      height: 0
    }

    6.944444444% {
      bottom: 0;
      height: 100%
    }

    50% {
      top: 0;
      height: 100%
    }

    59.944444433% {
      top: 0;
      height: 0
    }
  /*   91.6666667%{top:0;height:0%;} */
  }

  @keyframes load2 {
    0% {
      top: 0;
      height: 0
    }

    6.944444444% {
      top: 0;
      height: 100%
    }

    50% {
      bottom: 0;
      height: 100%
    }

    59.944444433% {
      bottom: 0;
      height: 0
    }
  /*   91.6666667%{bottom:0;height:0%} */
  }

  @keyframes load3 {
    0% {
      top: 0;
      height: 0
    }

    6.944444444% {
      top: 0;
      height: 100%
    }

    50% {
      bottom: 0;
      height: 100%
    }

    59.94444443% {
      bottom: 0;
      height: 0
    }
  /*   91.6666667%{bottom:0;height:0%;} */
  }

  @keyframes load4 {
    0% {
      top: 0;
      height: 0
    }

    6.944444444% {
      top: 0;
      height: 100%
    }

    50% {
      bottom: 0;
      height: 100%
    }

    59.94444443% {
      bottom: 0;
      height: 0
    }
  /*   91.6666667%{bottom:0;height:0%;} */
  }

  @keyframes load5 {
    0% {
      bottom: 0;
      height: 0
    }

    6.944444444% {
      bottom: 0;
      height: 100%
    }

    50% {
      top: 0;
      height: 100%
    }

    59.94444443% {
      top: 0;
      height: 0
    }
  /*   91.6666667%{top:0;height:0%;} */
  }

  @keyframes load6 {
    0% {
      bottom: 0;
      height: 0
    }

    6.944444444% {
      bottom: 0;
      height: 100%
    }

    50% {
      top: 0;
      height: 100%
    }

    59.94444443% {
      top: 0;
      height: 0
    }
  /*   91.6666667%{top:0;height:0%;} */
  }`;

export default Loader;
