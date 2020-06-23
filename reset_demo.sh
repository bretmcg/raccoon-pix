#!/bin/bash
rm -rf api/demo/*
cp -r api/function/* api/demo/
rm api/demo/deploy.sh
