class Api::ChannelsController < ApplicationController
    before_action :ensure_logged_in

    def index

    end

    def show
        @channel = Channel.find(params[:id])
        if @channel
            render :show
        else
            render json: ["Channel not found"], status: 404
        end
    end

    def create
        @channel = current_user.channels.new(channel_params)
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