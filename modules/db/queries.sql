--get_all_articles://
SELECT *
FROM edobavki.art_article
WHERE is_deleted = 0
ORDER BY id DESC
{{@if(it.limit)}} LIMIT ${limit} {{/if}};

--get_all_additives://
SELECT *
FROM edobavki.adt_additive
WHERE is_deleted = 0;

--get_additive://
SELECT *
FROM edobavki.adt_additive
WHERE id = ${id}
AND is_deleted = 0;

--get_article://
SELECT *
FROM edobavki.art_article
WHERE id = ${id}
AND is_deleted = 0;


--get_seo://
SELECT *
FROM edobavki.sys_seo_page
WHERE url = ${url};

--search_additive://
SELECT *
FROM edobavki.adt_additive
WHERE (spec LIKE ${txt}
OR code LIKE ${txt})
AND is_deleted = 0;

--create_additive://
INSERT INTO edobavki.adt_additive (
    code,
    spec,
    functions,
    in_russia,
    appearance,
    in_eu,
    negative_effects,
    seq,
    order_number,
    employment,
    extracted_from,
    creator_id,
    create_time)
VALUES (
    ${code},
    ${spec},
    ${functions},
    ${in_russia},
    ${appearance},
    ${in_eu},
    ${negative_effects},
    ${code},
    ${order_number},
    ${employment},
    ${extracted_from},
    1,
    NOW());

--update_additive://
UPDATE adt_additive SET
    spec = ${spec},
    functions = ${functions},
    in_russia = ${in_russia},
    appearance = ${appearance},
    in_eu = ${in_eu},
    negative_effects = ${negative_effects},
    seq = ${seq},
    order_number = ${order_number},
    employment = ${employment},
    extracted_from = ${extracted_from},
    is_deleted = true,
    updater_id = 1,
    update_time = NOW()
WHERE code = ${code};

--delete_additive://
UPDATE adt_additive SET
    is_deleted = true,
    updater_id = 1,
    update_time = NOW()
WHERE code = ${code};

--get_additive_by_code://
SELECT *
FROM edobavki.adt_additive
WHERE code = ${code}
AND is_deleted = 0;

--create_article://
INSERT INTO edobavki.art_article (
    spec,
    announcement,
    content,
    thumb_name,
    creator_id,
    create_time)
VALUES (
    ${spec},
    ${announcement},
    ${content},
    ${thumb_name},
    1,
    NOW());

--update_article://
UPDATE edobavki.art_article SET
    spec = ${spec},
    announcement = ${announcement},
    content = ${content},
    thumb_name = ${thumb_name},
    updater_id = 1,
    update_time = NOW()
WHERE id = ${id};

--get_article_by_id://
SELECT *
FROM edobavki.art_article
WHERE id = ${id}
AND is_deleted = 0;

--delete_article://
UPDATE edobavki.art_article SET
    is_deleted = 1,
    updater_id = 1,
    update_time = NOW()
WHERE id = ${id};
