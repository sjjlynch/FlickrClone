module Api
  class TagsController < ApplicationController
    # before_action :require_logged_in
    def index
      @tags = Tag.all
      render json: @tags
    end

    def new
    end
    #
    # def search
    #   @photos = Tag.search(params)
    #   render json: @photos
    # end

    def create
      @tag = Tag.find_or_create_by(tag_params)
      @tag.photo_ids += [params[:photo_id]]
        if @tag.save
          render json: @tag
        else
          render json: @tag.errors.full_messages,
          status: :unprocessable_entity
        end
    end

    # def search
    #   @tags = Tag.search(params)
    #   render :index
    # end
    #
    # def labels
    #   render json: Tag.where("? IS NULL OR label ~ ?", params[:label], params[:label]).pluck(:label, :id)
    # end

    def show
      @tag = Tag.find(params[:id])
      render :show
    end

    def tag_params
      params.require(:tag).permit(:label)
    end

  end
end
