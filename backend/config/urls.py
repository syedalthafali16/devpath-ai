from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),

    path("api/users/", include("users.urls")),
    path("api/mentor/", include("mentor.urls")),
    path("api/roadmaps/", include("roadmap.urls")),
]