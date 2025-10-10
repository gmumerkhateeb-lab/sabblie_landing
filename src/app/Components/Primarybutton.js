"use client"

const Primarybutton = ({text}) => {
  return (
    <div>
        <button className='primary-button bg-primary rounded-[9px] py-[12px]
        px-[26px]'style={{ color: "var(--color-primary22)" }}>
           {text}</button>
    </div>
  )
}

export default Primarybutton