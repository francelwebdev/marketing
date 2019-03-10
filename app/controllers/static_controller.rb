class StaticController < ApplicationController
  layout "landing", only: [:index]

  def index
  end

  def about
  end

  def pricing
    redirect_to root_path, alert: "There are no pricing plans configured." if Jumpstart.config.plans.none?
  end

  def terms
  end

  def privacy
  end
end
