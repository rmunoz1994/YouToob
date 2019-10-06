import React from 'react';
import VideoGrid from '../videos/video_grid'
import { timeSincePost } from '../../util/format_util';

const ChannelVideos = ({ channels, videos, history }) => (
    <section className="channel-show-selection">
        {videos.length > 0 ? 
            <VideoGrid 
                videos={videos}
                channels={channels}
                history={history}
                title="Uploads"
            />
        :
            <span id="no-videos-message">This channel has no videos.</span>       
        }
    </section>
);

export default ChannelVideos;