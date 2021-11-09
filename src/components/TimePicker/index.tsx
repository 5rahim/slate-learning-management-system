import { useCMF } from '@slate/hooks/use-color-mode-function'
import { HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from 'chalkui/dist/cjs'
import React, { useEffect, useState } from 'react'


interface TimePickerProps {
   defaultTime?: number
   onChange?: (value: number) => void
}

export function TimePicker(props: TimePickerProps) {
   
   const { defaultTime, onChange } = props
   
   const defaultHour = defaultTime ? Math.floor(defaultTime / 60) : 0
   const defaultMinutes = defaultTime ? Math.floor(( ( defaultTime / 60 ) - defaultHour ) * 60) : 0
   
   const cmf = useCMF()
   
   const [hour, setHour] = useState<number>(defaultHour)
   const [minutes, setMinites] = useState<number>(defaultMinutes)
   const [total, setTotal] = useState<number>(0)
   
   const format = (val: number) => val.toString().length < 2 ? `0` + val : val
   
   useEffect(() => {
      
      setTotal(hour * 60 + minutes)
      
   }, [hour, minutes])
   
   useEffect(() => {
      onChange && onChange(total)
   }, [total])
   
   return (
      <>
         <HStack
            display="inline-flex"
            bgColor={cmf('gray.200', 'gray.700')}
            borderRadius="md"
         >
            
            <NumberInput
               onChange={(valueAsString, valueAsNumber) => setHour(valueAsNumber)}
               value={format(hour)}
               size="md"
               width="4.5rem"
               defaultValue={defaultHour}
               step={1}
               min={0}
               max={23}
               allowMouseWheel
            >
               <NumberInputField />
               <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
               </NumberInputStepper>
            </NumberInput>
            
            <Text>:</Text>
            
            <NumberInput
               onChange={(valueAsString, valueAsNumber) => setMinites(valueAsNumber)}
               value={format(minutes)}
               size="md"
               width="4.5rem"
               defaultValue={defaultMinutes}
               step={5}
               min={0}
               max={55}
               allowMouseWheel
            >
               <NumberInputField />
               <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
               </NumberInputStepper>
            </NumberInput>
         
         </HStack>
      </>
   )
}