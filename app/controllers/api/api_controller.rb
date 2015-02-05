module Api
  class ApiController < ApplicationController
    # before_filter :require_logged_in
    #
    def require_logged_in
      redirect_to root_url unless signed_in?
    end
  end
end
