import { Box } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  
  //used to get the id from the url
  const {id} = useParams();

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=> setVideos(data?.items));
  },[id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(117deg, rgba(2,0,36,1) 0%, rgba(77,47,79,1) 29%, rgba(125,39,167,1) 73%, rgba(9,139,166,1) 100%)', zIndex: 10, height: '300px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-93px'/>
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{marginRight: {sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail