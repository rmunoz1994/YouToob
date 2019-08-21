class Api::ChannelsController < ApplicationController
    before_action :ensure_logged_in

    def show
        @channel = Channel.find(params[:id])
        render :show
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = current_user.channels.find(params[:id])
        @channel.destroy
        render json: @channel
    end

    def comment_params
        params.require(:comment).permit(:body, :parent_comment_id, :author_id, :video_id)
    end

end