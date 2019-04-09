class LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        end
    end
    
    def destroy
        @like = current_user.likes.find(params[:id])
        @like.destroy
        render json: @like
    end

    def like_params
        params.require(:like).permit(:liked, :likeable_id, :likeable_type, :user_id)
    end

end
