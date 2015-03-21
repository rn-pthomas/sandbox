# helper library for setting up fixture data in integration tests
require "debugger"

class Array
  def drop_last
    self.take(self.size-1)
  end
end

class String
  def push arg
    self.replace(self + arg)
  end
end

def resolve_identifier identifier_name, identifier_dispatch
end

def gen_fixture_sql_multiple_tables schema, tables
end

def gen_fixture_sql_single_table schema, table
  accum = []
  table.each do |table_name, recs|
    schema_table_name = "#{schema.to_s}.#{table_name.to_s}"
    recs.each do |rec|
      local_delete_accum       = "DELETE FROM #{schema_table_name} WHERE "
      local_insert_accum       = "INSERT INTO #{schema_table_name} "
      local_insert_binds_accum = []
      local_insert_vals_accum  = []
      pairs                    = rec.keys.zip(rec.values)

      pairs.each do |kv_pair|
        key = kv_pair[0].to_s
        val = kv_pair[1]
        local_insert_binds_accum.push key
        if val.class == String
          local_insert_vals_accum.push "'#{val}'"
        else
          local_insert_vals_accum.push val
        end
      end

      pairs.drop_last.each do |kv_pair|
        key = kv_pair[0].to_s
        val = kv_pair[1]
        if val.class == String
          local_delete_accum.push "#{key} = '#{val}' AND "
        else
          local_delete_accum.push "#{key} = #{val} AND "
        end
      end

      last_pair = pairs.last
      last_key  = last_pair[0].to_s
      last_val  = last_pair[1]
      if last_val.class == String
        local_delete_accum.push "#{last_key} = '#{last_val}';"
      else
        local_delete_accum.push "#{last_key} = #{last_val};"
      end

      local_insert_accum.push("(").push(local_insert_binds_accum.join(", ")).push(") VALUES (").push(local_insert_vals_accum.join(", ")).push(");")
      accum.push({
        :delete => local_delete_accum,
        :insert => local_insert_accum
      })
    end
  end
  accum
end

def setup_fixture_data identifier, fixture_data
  sql_accum = []
  fixture_data.each do |service, data_map|
    data_map.each do |schema, table_or_tables|
      if table_or_tables.keys.size > 1
        puts gen_fixture_sql_multiple_tables schema, table_or_tables
      else
        puts gen_fixture_sql_single_table schema, table_or_tables
      end
    end
  end
  sql_accum
end


### testing -->
setup_fixture_data("oat-rhombus", {
  :foo_service => {
    :users => {
      :accounts => [],
      :settings => []
    },
    :app_config => {
      :defaults => [{:name => "num-servers", :value => 3}]
    }
  }
})
### <-- testing
