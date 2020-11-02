import React from 'react';

import Box from './box';
import Text from './text';

 export default function DetailSummaryItem({
   data,
   children,
   border,
   ...props
}) {
  return (
    <Box position="relative" bg="white" px={28} py={20} {...props}>
      {border && (
        <Box
        position="absolute"
        left={12}
        right={12}
        top={0}
        height={1}
        bg="light"
        />
      )}


      {/*body*/}
      {data ? (
      <Box>
        <Box flexDirection="row">
           <Text ml={-14} mr={5} color="textLight">{data.anlam_sira}</Text>
          <Text color="red">İSİM</Text>
        </Box>

        <Box mt={8}>
           <Text fontWeight="bold">{data.anlam}</Text>
           {data.orneklerListe.map(ornek=>(
             <Box key={ornek.ornek_id}>
               <Text ml={10} mt={10} color="textLight" fontWeight="500">
                  {ornek.ornek}
               </Text>
             </Box>
           ))}
        </Box>
      </Box>
      ) : (
        children
      )}
    </Box>
  )
}
