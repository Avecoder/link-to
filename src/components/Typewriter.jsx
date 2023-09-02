import { useState, useEffect } from 'react'

const Typewriter = ({ text, delay, sliderIndex }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0)


  useEffect(() => {
    if(currentSliderIndex !== sliderIndex) {
        setCurrentIndex(0)
        setCurrentText('')
        setCurrentSliderIndex(sliderIndex)
    }
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)

      
  
      return () => clearTimeout(timeout)
    }

    
    
  }, [currentIndex, delay, text, sliderIndex])

  return <span>{currentText}</span>
}

export default Typewriter