import React from 'react'
import {Stack, Box} from '@mui/material'
import {VideoCard, ChannelCard, Loader} from './index'
const Videos = ({videos,direction}) => {

  if(!videos?.length) return <Loader />;

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='flex-start' gap={2} >
      {videos.filter(item => item.id.videoId !== undefined).map((item,index)=>(
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box> 
      ))}
    </Stack>
  )
}

export default Videos