from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from quickstart import views as view_quickstart
from items import views as view_items
from videos import views as view_videos
from gallery import views as view_fotos
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings


router = routers.DefaultRouter()
router.register(r'users', view_quickstart.UserViewSet)
router.register(r'items', view_items.ItemViewSet)
router.register(r'videos', view_videos.VideoViewSet)
router.register(r'gallery', view_fotos.FotoViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', TemplateView.as_view(template_name ='index.html')),
    path('', include(router.urls)),
    path('items/', include(router.urls)),
    path('videos/', include(router.urls)),
    path('gallery/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

