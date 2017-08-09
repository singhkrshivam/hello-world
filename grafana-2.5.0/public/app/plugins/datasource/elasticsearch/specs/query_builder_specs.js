/*! grafana - v2.5.0 - 2015-10-28
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports","../query_builder","test/lib/common"],function(a,b,c,d){d.describe("ElasticQueryBuilder",function(){var a;d.beforeEach(function(){a=new c({timeField:"@timestamp"})}),d.it("with defaults",function(){var b=a.build({metrics:[{type:"Count",id:"0"}],timeField:"@timestamp",bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"1"}]});d.expect(b.query.filtered.filter.bool.must[0].range["@timestamp"].gte).to.be("$timeFrom"),d.expect(b.aggs[1].date_histogram.extended_bounds.min).to.be("$timeFrom")}),d.it("with raw query",function(){var b=a.build({rawQuery:'{"query": "$lucene_query"}'});d.expect(b.query).to.be("$lucene_query")}),d.it("with multiple bucket aggs",function(){var b=a.build({metrics:[{type:"count",id:"1"}],timeField:"@timestamp",bucketAggs:[{type:"terms",field:"@host",id:"2"},{type:"date_histogram",field:"@timestamp",id:"3"}]});d.expect(b.aggs[2].terms.field).to.be("@host"),d.expect(b.aggs[2].aggs[3].date_histogram.field).to.be("@timestamp")}),d.it("with select field",function(){var b=a.build({metrics:[{type:"avg",field:"@value",id:"1"}],bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"2"}]},100,1e3),c=b.aggs[2].aggs;d.expect(c[1].avg.field).to.be("@value")}),d.it("with term agg and order by metric agg",function(){var b=a.build({metrics:[{type:"count",id:"1"},{type:"avg",field:"@value",id:"5"}],bucketAggs:[{type:"terms",field:"@host",settings:{size:5,order:"asc",orderBy:"5"},id:"2"},{type:"date_histogram",field:"@timestamp",id:"3"}]},100,1e3),c=b.aggs[2],e=c.aggs[3];d.expect(c.aggs[5].avg.field).to.be("@value"),d.expect(e.aggs[5].avg.field).to.be("@value")}),d.it("with metric percentiles",function(){var b=a.build({metrics:[{id:"1",type:"percentiles",field:"@load_time",settings:{percents:[1,2,3,4]}}],bucketAggs:[{type:"date_histogram",field:"@timestamp",id:"3"}]},100,1e3),c=b.aggs[3];d.expect(c.aggs[1].percentiles.field).to.be("@load_time"),d.expect(c.aggs[1].percentiles.percents).to.eql([1,2,3,4])}),d.it("with filters aggs",function(){var b=a.build({metrics:[{type:"count",id:"1"}],timeField:"@timestamp",bucketAggs:[{id:"2",type:"filters",settings:{filters:[{query:"@metric:cpu"},{query:"@metric:logins.count"}]}},{type:"date_histogram",field:"@timestamp",id:"4"}]});d.expect(b.aggs[2].filters.filters["@metric:cpu"].query.query_string.query).to.be("@metric:cpu"),d.expect(b.aggs[2].filters.filters["@metric:logins.count"].query.query_string.query).to.be("@metric:logins.count"),d.expect(b.aggs[2].aggs[4].date_histogram.field).to.be("@timestamp")})})});