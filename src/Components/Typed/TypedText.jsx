import React from 'react';
import Typed from 'react-typed'

function TypedText() {
  return (
    <div className='text-gray-600 font-bold text-[18px] text-center py-8'>
        <Typed
                strings={[
                    'هدف ما',
                    'جلب رضایت شماست',
                    'با زود فود طعمی ماندگار را خواهید چشید']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
    </div>
  )
}

export default TypedText;