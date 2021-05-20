import React from 'react'
import lottie from 'lottie-web'

export const LikeButton = (props) => {  

  useEffect(() => {
    lottie.likeAnimation({
      container: lottieContainer.current,
      render: 'svg',
      loop: false,
      autoplay: onClick,
      // eslint-disable-next-line global-require
      animationData: require('../assets/heartbtn.json')
    })
  }, [])

  return (    
      <button className={`like-button ${props.thoughts.hearts === 0 ? "not-liked" : "liked"}`} onClick= {() => props.OnLikesIncrease(props.thoughts._id), ref={lottieContainer}}>
        <span className="heart-on-button-icon" role="img" aria-label="Heart">💗</span>
      </button>    
  )
}