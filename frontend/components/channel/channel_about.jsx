import React from 'react';
import { timeSincePost } from '../../util/format_util';

const ChannelAbout = ({ channel }) => (
    <section className="channel-show-selection">
        <div id="channel-about">
            <div id="channel-description-container">
                <section id="channel-description">
                    <h3>Description</h3>
                    <p>{channel.description}</p>
                </section>
            </div>
            <section id="channel-stats">
                <h3>Stats</h3>
                <span>Joined {timeSincePost(channel.createdAt)}</span>
                {/* <span>View</span> */}
            </section>
        </div>
    </section>
);

export default ChannelAbout;