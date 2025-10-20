"use client"

const Primarybutton = ({ text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="cursor-pointer primary-button bg-[#0E315B] rounded-[9px]
          py-[10px] md:py-[16px] px-[26px]"
        style={{ color: 'var(--color-primary22)' }}
      >
        {text}
      </button>
    </div>
  )
}

export default Primarybutton
