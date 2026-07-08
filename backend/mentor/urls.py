from django.urls import path
from .views import (
    GenerateRoadmapView,
    MentorChatView,
    SkillGapView,
)

urlpatterns = [
    path("roadmap/", GenerateRoadmapView.as_view()),
    path("chat/", MentorChatView.as_view()),
    path("skill-gap/", SkillGapView.as_view()),
]