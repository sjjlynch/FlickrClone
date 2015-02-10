module Api
  class TaggingsController < ApiController

    def new
    end

    def create
      @tagging = Tagging.new(tagging_params)
      if @tagging.save
        render json: @tagging
      else
        render json: @tagging.errors.full_messages,
        status: :unprocessable_entity
      end
    end

    def destroy
      @tagging = Tagging.find(params[:id])
      @tagging.try(:destroy)
      render json: {}
    end

    def tagging_params
      params.require(:tagging).permit(:tag_id, :photo_id)
    end

  end
end
