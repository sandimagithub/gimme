OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
<<<<<<< HEAD

=======
>>>>>>> 60638fe7f6223c925677c10f478b06471089c641
  provider :facebook, ENV["facebook_app_id"], ENV["facebook_secret"]
end