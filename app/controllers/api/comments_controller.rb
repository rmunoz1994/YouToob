class CommentsController < ApplicationController
    before_action :ensure_logged_in

    def create
        @comment = current_user.comments.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy

    end

    def comment_params
        params.require(:comment).permit(:body, :parent_comment_id)
    end

end
