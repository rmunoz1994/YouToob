class Api::SubscriptionsController < ApplicationController
    before_action :ensure_logged_in
    
    def index
        @subscriptions = current_user.subscriptions
        if !subscriptions.empty?
            render :index
        else
            render json: {}, status: 200
        end
    end

    def create
        @subscription = Subscription.new(subscription_params)
        if @susbcription.save
            render :show
        else
            render json: @subscription.errors.full_messages, status: 404
        end
    end

    def destroy
        @subscription = current_user.subscriptions.find(params[:id])
        @subscription.destroy
        render json: @subscription
    end

    def subscription_params
        params.require(:subscription).permit(:id, :channel_id, :subscriber_id)
    end
end