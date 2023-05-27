import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import React from "react";


function Home() {
 
  return (
    <Box width={'100%'} display={'flex'} justifyItems={'center'} flexDirection={'column'} margin={'40px 0px'} alignItems={'center'}>
      <Box width={'80%'} minHeight={'350px'}  borderRadius={'10px'} padding={'40px 20px 20px'} sx={{backgroundColor:'white'}} display={'flex'} flexDirection={'column'}>
          <Box display={'flex'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
              <FormControl>
                <FormLabel>
                  <RadioGroup sx={{display:'flex',flexDirection:'row'}}>
                   <FormControlLabel value={'oneway'} label={'One Way'} control={<Radio size="small" />}></FormControlLabel>
                   <FormControlLabel value={'roundtrip'} label={'Round Trip'} control={<Radio size="small"/>}></FormControlLabel>
                   <FormControlLabel value={'multicity'} label={'Multi City'} control={<Radio size="small"/>}></FormControlLabel>
                  </RadioGroup>
                </FormLabel>
              </FormControl>
              <Box>
                  Book International and Domestic Flights
              </Box>
          </Box>
          <Box flex={1}>

          </Box>
          <Box display={'flex'} width={'100%'} justifyContent={'space-between'}  alignItems={'center'}>
              <FormControl sx={{flex:'.8'}}>
                <FormLabel  sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <Box fontSize={'11px'} fontWeight={'600'} color='black' width='100px'><span>Select A </span><br></br><span>Fare Type :</span></Box>
                  <RadioGroup sx={{display:'flex',flexDirection:'row'
                  ,marginLeft:'5px',flexWrap:'nowrap','& span':{fontSize:'11px'},
                  '& label':{backgroundColor: '#ccc',padding: '2px 3px'}}}>
                   <FormControlLabel value={'regular'} label={'Regular Fires'} control={<Radio  size="small" />}></FormControlLabel>
                   <FormControlLabel value={'armedforce'} label={'Armed Force Fires'} control={<Radio size="small"/>}></FormControlLabel>
                   <FormControlLabel value={'student'} label={'Student Fires'} control={<Radio size="small"/>}></FormControlLabel>
                   <FormControlLabel value={'seniorcitizen'} label={'Senior Citizen Fires'} control={<Radio  size="small" />}></FormControlLabel>
                   <FormControlLabel value={'docterandnurse'} label={'Doctor & Nurse Fires'} control={<Radio size="small"/>}></FormControlLabel>
                   <FormControlLabel value={'doubleseat'} label={'Double Seat Fires'} control={<Radio size="small"/>}></FormControlLabel>
                  </RadioGroup>
                </FormLabel>
              </FormControl>
              <Box display={'flex'} sx={{'& *':{fontSize:'13px'}}} alignItems={'center'}>
                  <Box color={'black'} fontSize={'14px'} fontWeight={'600'}>
                    Trending Searches :
                  </Box>
                  <Box display={'flex'} sx={{backgroundColor:'#ccc'}} padding='6px 8px' alignItems={'center'} marginLeft={'3px'}>
                    <span> Delhi</span> <ArrowRightAltOutlined/> <span>Paris</span>
                  </Box>
                  <Box display={'flex'} sx={{backgroundColor:'#ccc'}} padding='6px 8px' alignItems={'center'} marginLeft={'3px'}>
                    <span> Delhi</span> <ArrowRightAltOutlined/> <span>Kolkata</span>
                  </Box>
              </Box>
          </Box>
      </Box>
      <Box>

      </Box>
    </Box>
  );
}

export default Home;
