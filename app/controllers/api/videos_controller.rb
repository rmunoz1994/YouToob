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

    end

    def update

    end

    def destroy
        
    end

    def video_params
        params.require(:video).permit(:title, :description)
    end

end
