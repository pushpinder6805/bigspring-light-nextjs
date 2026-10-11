---
title: "Pagination for large API collections"
date: "2026-10-11T00:00:00Z"
description: "An endpoint that returns every record can become slow long before the interface feels large."
desc: "An endpoint that returns every record can become slow long before the interface feels large."
category: "Backend & APIs"
author: "TheTechSpectra"
image: "/images/articles/pagination-for-large-api-collections.svg"
image_alt: "Pagination for large API collections \u2014 records, stable sort, cursor, next page"
draft: false
---

An endpoint that returns every record can become slow long before the interface feels large. Pagination limits work per request and gives clients a predictable way to load more data.

## A practical approach

1. Choose offset pagination for simple, relatively stable lists or cursor pagination for large collections with frequent changes. Document the ordering and maximum page size.
2. Use a stable sort with a tie-breaker, such as creation time plus a unique identifier. A timestamp alone may not uniquely identify a position.
3. Return enough metadata for the client to continue or stop. Test empty collections, deleted records, and inserts between page requests.

## Watch for this

A cursor is a continuation mechanism, not permission to access a resource; apply authorization to every page.

## Before you ship

Exercise the endpoint with valid, invalid, and unauthorized requests. Check that the response contract and server logs give clients and operators enough information to recover.

[Discuss your project with our team](/contact).
