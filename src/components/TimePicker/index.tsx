import { useCMF } from '@slate/hooks/useColorModeFunction'
import { useUserSettings } from '@slate/hooks/useUserSettings'
import { HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from 'chalkui/dist/cjs'
import { Box, Icon, Select } from 'chalkui/dist/cjs/React'
import React, { useEffect, useState } from 'react'
import { BiTime } from 'react-icons/bi'


interface TimePickerProps {
   defaultTime?: number
   onChange?: (value: number) => void
}

/**
 * @param {TimePickerProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export function TimePicker(props: TimePickerProps) {
   
   const { defaultTime, onChange } = props
   
   const defaultHour = defaultTime ? Math.floor(defaultTime / 60) : 0
   const defaultMinutes = defaultTime ? Math.floor(( ( defaultTime / 60 ) - defaultHour ) * 60) : 0
   
   const cmf = useCMF()
   const { hour_format } = useUserSettings()
   
   const [selectedM, setSelectedM] = useState(defaultHour > 12 ? 'PM' : 'AM')
   const [hour, setHour] = useState<number>(H24toH12(defaultHour))
   const [minutes, setMinites] = useState<number>(defaultMinutes)
   const [total, setTotal] = useState<number>(0)
   
   const format = (val: number) => {
      return val.toString().length < 2 ? `0` + val : val
   }
   
   useEffect(() => {
      setHour(hour_format === '12' ? H24toH12(defaultHour) : defaultHour)
   }, [hour_format])
   
   useEffect(() => {
      
      setTotal(H12toH24(hour) * 60 + minutes)
      
   }, [hour, minutes, selectedM])
   
   useEffect(() => {
      onChange && onChange(total)
   }, [total])
   
   
   function H12toH24(hour: number) {
      return hour_format === '12'
         ?
         ( selectedM === 'PM' && hour < 12 ) ? hour + 12 : ( selectedM === 'AM' && hour === 12 ) ? hour - 12 : hour
         :
         hour
   }
   
   function H24toH12(hour: number) {
      return ( ( hour + 11 ) % 12 + 1 )
   }
   
   function handleSetHour(valueAsString: string, valueAsNumber: number) {
      setHour(valueAsNumber)
   }
   
   return (
      <>
         <HStack
            display="inline-flex"
            bgColor={cmf('gray.200', 'gray.700')}
            borderRadius="md"
         >
            
            <Box pl="3">
               <Icon as={BiTime} />
            </Box>
            
            <NumberInput
               onChange={handleSetHour}
               value={format(hour)}
               size="md"
               width="4.5rem"
               defaultValue={defaultHour}
               step={1}
               min={hour_format === '24' ? 0 : 1}
               max={hour_format === '24' ? 23 : 12}
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
               step={1}
               min={0}
               max={59}
               allowMouseWheel
            >
               <NumberInputField />
               <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
               </NumberInputStepper>
            </NumberInput>
            
            {hour_format === '12' &&
            <Select boxShadow="none" border="none" defaultValue={selectedM} onChange={(e: any) => setSelectedM(e.target.value)} width="70px">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </Select>}
         
         </HStack>
      </>
   )
}
