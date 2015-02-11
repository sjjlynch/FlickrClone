module Api
  class TagsController < ApplicationController
    # before_action :require_logged_in
    def index
      @tags = Tag.all
      render json: @tags
    end

    def new
    end

    # def tagsearch
    #   # @tag = Tag.find_by_label
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

    def show
      @tag = Tag.find(params[:id])
      render :show
    end

    def tag_params
      params.require(:tag).permit(:label)
    end

  end
end
