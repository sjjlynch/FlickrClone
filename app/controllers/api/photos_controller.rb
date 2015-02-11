module Api
  class PhotosController < ApiController
  # before_action :require_logged_in

  def index
    @photos = current_user.photos
    render :index
  end

  def new
  end

  def edit
  end

  def create
    @photo = current_user.photos.new(photo_params)
    if @photo.save
      render json: @photo
    else
      render json: @photo.errors.full_messages,
              status: :unprocessable_entity
    end
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def destroy
    @photo = current_user.photos.find(params[:id])
    @photo.try(:destroy)
    render json: {}
  end

  # def photosearch
  # end


  # def edit
  #   @photo = Photo.find(params[:id])
  #   render json: @photo
  # end

  # def update
  #   @photo = Photo.find(params[:id])
  #   if @photo.update_attributes(photo_params)
  #     render json: @photo
  #   else
  #     render json: @photo.errors.full_messages,
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

  def photo_params
    params.require(:photo).permit(:title, :photographer_id, :description, :gallery_id, :filepicker_url)
  end

end
end
