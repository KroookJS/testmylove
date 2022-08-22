import React from 'react'

function Customize() {
  return (
    <div className='customize-theme'>
        <div className='card'>
            <h2>
                Настрой цвета и размер шрифтов
            </h2>
            <p className='text-muted'>
                Измени размер шрифта
            </p>

            {/* ============Размер Шрифта=============== */}

            <div className='font-size'>
                <h6>Font-size</h6>
                <div>
                    <h4>
                        Aa
                    </h4>

                    <div className='chose-size'>
                        <span className='font-size-1'></span>
                        <span className='font-size-2 active'></span>
                        <span className='font-size-3'></span>
                        <span className='font-size-4'></span>
                        <span className='font-size-5'></span>
                    </div>
                    <h3>Aa</h3>
                </div>

                
            </div>

            <div className='color'>
                <h4>Color</h4>
                <div className='chose-coler'>
                    <span className='color-1 active'></span>
                    <span className='color-2'></span>
                    <span className='color-3'></span>
                    <span className='color-4'></span>
                    <span className='color-5'></span>
                </div>
            </div>

            <div className='background'>
                <h4>Background</h4>

                <div className='chose-bg'>
                    <div className='bg-1 active'>
                        <span></span>
                        <h5 for='bg-1'>Light</h5>
                    </div>
                    <div className='bg-2'>
                        <span></span>
                        <h5 for='bg-1'>Dark</h5>
                    </div>
                    <div className='bg-3'>
                        <span></span>
                        <h5 for='bg-1'>Dim</h5>
                    </div>


                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Customize