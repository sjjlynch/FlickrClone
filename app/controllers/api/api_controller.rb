module Api
  class ApiController < ApplicationController
    before_action :require_logged_in

    # def require_logged_in
    #   redirect_to new_session_url unless signed_in?
    # end
  end
end
