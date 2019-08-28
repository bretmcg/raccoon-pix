gcloud config set run/cluster raccoon-pix-cluster
gcloud config set run/cluster_location us-east1-b

gcloud beta container clusters create raccoon-pix-cluster \
--addons=HorizontalPodAutoscaling,HttpLoadBalancing,Istio,CloudRun \
--machine-type=n1-standard-4 \
--cluster-version=latest --zone=us-east1-b \
--enable-stackdriver-kubernetes \
--scopes cloud-platform

gcloud container clusters get-credentials raccoon-pix-cluster --zone=us-east1-b