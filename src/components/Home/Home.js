import React, {useState , useEffect} from 'react';
import './home.css'
import img1 from '../../static/images/one.jpg'
import video1 from '../../static/videos/two.mp4'
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ru';

const Home = () => {
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        axios('http://127.0.0.1:8000/api/videos/')
        .then((data)=>{
            setVideos(data.data)
        })
    },[])
    
    return (
        <>
        <div className={'home'}>

            <a href='/user/register'>Login</a>
        
            <a href='/user/login'>Register</a>
            <a href='/user'>Account</a>
            <div className={'home__inner'}>
                {videos.map((item)=>(
                    <VideoBlock item={item} key={item.id} />
                ))}
            </div>
        </div>
        </>
    );
    
};

const VideoBlock = ({item})=>{
    const{channel,title,video_file,video_views,created}=item
    const [timeDiff,setTimeDiff] = useState([])
    useEffect(() => {
        const interval = setInterval(() => {
          const now = moment();
          const then = moment(created);
          const diff = moment.duration(now.diff(then));
            moment.locale('ru')
          setTimeDiff(diff.humanize());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    return (
                <div className='video__block'>
                          <div className='video'>
                                    <video className='video__file' src={video_file} controls></video>
                            </div>
                         <div className='video__info'>
                                <div className='ava'>
                                    <img className='youtubeImage'  src={channel.profile_image} />
                            </div>
                         <div>
                            <a href='dafa' className='video__title'>{title} </a>
                            <a href='dafa' className='account'>{channel.username}</a>
                            <p className='video_views_date'>{video_views.length} watches {timeDiff}</p>
                        </div>
                    </div>
                </div>
    )
}
export default Home;