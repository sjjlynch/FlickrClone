module Api
  class GalleriesController < ApiController
    # before_action :require_logged_in

    def index
      @galleries = current_user.galleries
      render :index
    end

    def new
    end

    def edit
    end

    def create
      @gallery = current_user.galleries.new(gallery_params)
      if @gallery.save
        render json: @gallery
      else
        render json: @gallery.errors.full_messages,
        status: :unprocessable_entity
      end
    end

    def show
      @gallery = Gallery.find(params[:id])
      # @photos = @gallery.photos
      render :show
    end

    def destroy
      @gallery = current_user.galleries.find(params[:id])
      @gallery.try(:destroy)
      render json: {}
    end

    # def edit
    #   @gallery = Gallery.find(params[:id])
    #   render json: @gallery
    # end

    # def update
    #   @gallery = Gallery.find(params[:id])
    #   if @gallery.update_attributes(gallery_params)
    #     render json: @gallery
    #   else
    #     render json: @gallery.errors.full_messages,
    #             status: :unprocessable_entity
    #   end
    # end

    private

    # def current_user
    #   user = User.find(params[:photographer_id]);
    #   if !user
    #     redirect_to root_url
    #   end
    # end

    def gallery_params
      params.require(:gallery).permit(:title, :description, :photographer_id)
    end

  end
end
