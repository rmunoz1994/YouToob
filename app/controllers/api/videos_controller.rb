class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def create
        @video = Video.new(video_params)
        debugger
        if @video.save
            render json: {message: "You did it!"}
        else
            render json: @video.errors.full_messages
        end
    end

    def update

    end

    def destroy

    end

    def video_params
        params.require(:video).permit(:title, :description, :uploader_id, :videoUrl, :thumbnailUrl)
    end

end
