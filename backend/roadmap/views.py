from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Roadmap


class RoadmapListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        roadmaps = Roadmap.objects.filter(user=request.user)

        data = []

        for roadmap in roadmaps:
            data.append({
                "id": roadmap.id,
                "role": roadmap.role,
                "content": roadmap.content,
                "created_at": roadmap.created_at,
            })

        return Response(data)