import os

import google.generativeai as genai

from dotenv import load_dotenv
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from roadmap.models import Roadmap

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


class GenerateRoadmapView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        role = request.data.get("role")

        prompt = f"""
Create a beginner friendly roadmap for becoming a {role}.

Return markdown.

Include:
- Week wise roadmap
- Skills
- Projects
- Resources

Keep it concise.
"""

        response = model.generate_content(prompt)

        Roadmap.objects.create(
            user=request.user,
            role=role,
            content=response.text,
        )

        return Response({
            "roadmap": response.text
        })


class MentorChatView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        message = request.data.get("message")

        prompt = f"""
You are DevPath AI Mentor.

Answer like an experienced software engineer.

Rules:
- Help with programming only.
- Explain simply.
- Use markdown.
- Give examples when needed.
- Keep answers concise.

Question:

{message}
"""

        response = model.generate_content(prompt)

        return Response({
            "reply": response.text
        })
    
class SkillGapView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        current_skills = request.data.get("current_skills")
        target_role = request.data.get("target_role")

        prompt = f"""
You are an expert software engineer.

Current Skills:
{current_skills}

Target Role:
{target_role}

Analyze the user's skill gap.

Return markdown with:

# Current Strengths

# Missing Skills

# Learning Priority

# Projects To Build

# 30-Day Action Plan

Keep it concise and practical.
"""

        response = model.generate_content(prompt)

        return Response({
            "analysis": response.text
        })