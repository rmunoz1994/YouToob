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
        if @video.save
            render json: {message: "You did it!"}
        else
            render json: @video.errors.full_messages, status: 404
        end
    end

    def update
        @video = Video.find_by(id: params[:video][:id])
        if @video.update_attributes(video_params)
            render json: { message: "You did it!" }
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = current_user.uploads.find(params[:id])
        @video.destroy
        render json: @video
    end

    def video_params
        params.require(:video).permit(:id, :title, :description, :uploader_id, :videoUrl, :thumbnailUrl)
    end

end
